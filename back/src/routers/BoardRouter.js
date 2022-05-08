import { Router } from "express";
import { BoardService } from "../services/BoardService";
import { verifyToken } from "../middlewares/verifyToken";
import { ImageModel } from "../db";
import { storage } from "../db/models/Image";
import multer from "multer";

const upload = multer({ storage: storage });
const BoardRouter = Router();

BoardRouter.post(
  "/board",
  verifyToken,
  upload.array("img"),
  async (req, res, next) => {
    try {
      const title = req.body.title;
      const writer = req.user;
      const context = req.body.context;
      const images = req.images;
      const newBoard = await BoardService.create({
        title,
        writer,
        context,
        images,
      });
      res.status(200).json(newBoard);
    } catch (error) {
      next(error);
    }
  }
);

BoardRouter.delete("/board/:id", verifyToken, async (req, res, next) => {
  try {
    const writer = req.user;
    const boardId = req.params.id;
    const deleteBoard = await BoardService.delete({ writer, boardId });
    if (deleteBoard.errorMessage) {
      throw new Error(deleteBoard.errorMessage);
    }
    res.status(200).json(deleteBoard);
  } catch (error) {
    next(error);
  }
});

BoardRouter.put("/board/:id", verifyToken, async (req, res, next) => {
  try {
    const title = req.body.title;
    const writer = req.user.writer;
    const boardId = req.params.id;
    const context = req.body.context;

    const modifiedBoard = await BoardService.modify({
      title,
      writer,
      boardId,
      context,
    });

    res.status(200).json(modifiedBoard);
  } catch (error) {
    next(error);
  }
});

// 게시글 조회
BoardRouter.get("/board/:id", async (req, res, next) => {
  try {
    const boardId = req.params.id;
    const currentBoardInfo = await BoardService.getBoardInfo({ boardId });

    if (currentBoardInfo.errorMessage) {
      throw new Error(currentBoardInfo.errorMessage);
    }
    res.status(200).json(currentBoardInfo);
  } catch (error) {
    next(error);
  }
});

BoardRouter.get("/boardlist", async (req, res, next) => {
  try {
    const boardList = await BoardService.boardList();
    res.status(200).json(boardList);
  } catch (error) {
    next(error);
  }
});
export { BoardRouter };
