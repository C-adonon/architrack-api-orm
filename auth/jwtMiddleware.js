import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

function authenticateToken(req, res, next) {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json({ message: "Token not found" });

  jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Unauthorized" });
    req.user = user;
    next();
  });
}

function getAuthorIdFromToken(req) {
  const token = req.cookies.accessToken;
  if (!token) return null;

  const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
  return payload.uuid;
}

function generateTokens(user) {
  const accessToken = jwt.sign(
    { uuid: user.uuid, email: user.email },
    process.env.JWT_ACCESS_SECRET,
    {
      expiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
    }
  );
  const refreshToken = jwt.sign(
    { uuid: user.uuid, email: user.email },
    process.env.JWT_REFRESH_SECRET,
    {
      expiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
    }
  );
  return { accessToken, refreshToken };
}

function generateAccessToken(user) {
  return jwt.sign(
    { uuid: user.uuid, email: user.email },
    process.env.JWT_ACCESS_SECRET,
    {
      expiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
    }
  );
}

// TODO FLAGS EN PRODUCTION : {  httpOnly: true,  secure: true,  sameSite: 'Strict' }
// TODO FLAGS EN DEV : {  httpOnly: true,  secure: false,  sameSite: 'None/Lax' }
// function sendTokens(res, tokens) {
//   res.cookie("accessToken", tokens.accessToken, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "PROD" ? true : false,
//     sameSite: process.env.NODE_ENV === "PROD" ? "Strict" : "Lax",
//   });
//   res.cookie("refreshToken", tokens.refreshToken, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "PROD" ? true : false,
//     sameSite: process.env.NODE_ENV === "PROD" ? "Strict" : "Lax",
//   });
// }
function sendTokens(res, tokens) {
  res.cookie("accessToken", tokens.accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "Lax",
  });
  res.cookie("refreshToken", tokens.refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "Lax",
  });
}

function sendAccessToken(res, token) {
  res.cookie("accessToken", token, {
    httpOnly: true,
    secure: true,
    sameSite: "Strict",
  });
}

export {
  generateTokens,
  sendTokens,
  authenticateToken,
  generateAccessToken,
  sendAccessToken,
  getAuthorIdFromToken,
};
