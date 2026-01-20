import { prisma } from "../db";

export const createRoomService = async (
  userId: string
) => {
  const room = await prisma.room.create({
    data: {
      ownerId: userId,
    },
  });

  return room;
};
