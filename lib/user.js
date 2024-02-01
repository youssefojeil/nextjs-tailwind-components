import prisma from '@/lib/prisma';

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
  } catch (error) {}
};
