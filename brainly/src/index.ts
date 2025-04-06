
//......................npm run dev..................

import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import { contentmodel, LinkModel, UserModel } from "./db";
import { JWT_PASSWORD } from "./config";
import { UserMW } from "./middleware";
import { random } from "./utils";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/v1/signup", async (req, res) => {
    // zod validation
    // hash the password
    const { username, password } = req.body;

    try {
        await UserModel.create({
            username: username,
            password: password
        })

        res.json({
            message: "User signed up"
        })
    }
    catch (e) {
        res.status(411).json({
            message: "gooofssf"
        })
    }

})

app.post("/api/v1/signin", async (req, res) => {
    const { username, password } = req.body;

    const existingUser = await UserModel.findOne({
        username, password
    })
    if (existingUser) {
        const token = jwt.sign({
            id: existingUser._id
        }, JWT_PASSWORD)
        res.json({
            token
        })
    }
    else {
        res.status(403).json({
            message: "incorrect creds"
        })
    }
})
app.post("/api/v1/content", UserMW, async (req, res) => {
    const link=req.body.link;
    const type=req.body.type;
    await contentmodel.create({
        link, type,
        title:req.body.title,
        //@ts-ignore
        userId: req.userId,
        tags: []
    })
    res.json({
        message: "content added"
    })

})
app.get("/api/v1/content", UserMW, async (req, res) => {
    //@ts-ignore
    const userId = req.userId;
    const content = await contentmodel.find({
        userId: userId
    }).populate("userId", "username")
    res.json({
        content
    })

})

app.delete("/api/v1/content", UserMW, async (req, res) => {
    const contentId = req.body.contentId;

    await contentmodel.deleteMany({
        contentId,
        //@ts-ignore
        userId: req.userId
    })
    res.json({
        message: "message deleted"
    })

})

app.post("/api/v1/share", UserMW, async (req, res) => {
    const share = req.body.share;
    if (share) {
        const existingLink = await LinkModel.findOne({
            //@ts-ignore
            userId: req.userId
        });

        if (existingLink) {
            res.json({
                hash: existingLink.hash
            })
            return;
        }
        const hash = random(10);
        await LinkModel.create({
            //@ts-ignore
            userId: req.userId,
            hash: hash
        })

        res.json({
            hash
        })
    }
    else {
        await LinkModel.deleteOne({
            //@ts-ignore
            userId: req.userId
        });

        res.json({
            message: "Removed link"
        })
    }
})

app.get("/api/v1/:shareLink", async (req, res) => {
    const hash = req.params.shareLink;
    const link = await LinkModel.findOne({
        hash
    })
    if (!link) {
        res.status(411).json({
            message: "sorry bro sori"
        })
        return;
    }
    const content = await contentmodel.find({
        userId: link.userId
    })
    const user = await UserModel.findOne({
        _id: link.userId
    })
    if (!user) {
        res.status(411).json({
            message: "user not found, error should ideally not happen"
        })
        return;
    }
    res.json({
        username: user?.username,
        content: content
    })

})

app.listen(3000)
