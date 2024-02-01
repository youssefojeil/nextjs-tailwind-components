import prisma from '@/lib/prisma';
import { auth, currentUser } from '@clerk/nextjs';

export const getUsers = async () => {
  try {
    const allUsers = await prisma.user.findMany();
    console.log('in server folder');
    console.log(allUsers);
  } catch (e) {
    console.log(e);
  }
};

export const addUser = async () => {
  try {
    const user = await currentUser();

    console.log(user.emailAddresses);

    console.log(user.emailAddresses[0].emailAddress);
    const email = user.emailAddresses[0].emailAddress;
    const findUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    console.log({ findUser });
    if (!findUser) {
      await prisma.user.create({
        data: {
          email: email,
          name: user.firstName,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};
