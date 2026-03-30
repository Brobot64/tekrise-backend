import User from '../models/User';
import generateToken from '../utils/generateToken';

export const register = async (userData: any) => {
  const { name, email, password } = userData;

  const userExists = await User.findOne({ email });

  if (userExists) {
    throw new Error('User already exists');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id as any),
    };
  } else {
    throw new Error('Invalid user data');
  }
};

export const login = async (credentials: any) => {
  const { email, password } = credentials;

  const user = await User.findOne({ email }).select('+password');

  if (user && (await user.comparePassword(password))) {
    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id as any),
    };
  } else {
    throw new Error('Invalid email or password');
  }
};
