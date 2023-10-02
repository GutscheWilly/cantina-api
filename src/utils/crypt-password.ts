import bcrypt from 'bcryptjs';

export const cryptPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const comparePassword = async (password: string, encryptedPassword: string): Promise<boolean> => {
  return await bcrypt.compare(password, encryptedPassword);
};
