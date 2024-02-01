import prisma from './prisma';

// set youssefojeil as admin
export const setAdmin = async () => {
  try {
    await prisma.user.update({
      where: { id: 1 },
      data: { role: 'admin' },
    });
  } catch (error) {
    console.log(error);
  }
};
