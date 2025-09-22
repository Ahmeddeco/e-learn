import arcjet, { fixedWindow, detectBot, protectSignup, sensitiveInfo, shield, slidingWindow } from "@arcjet/next"
export { detectBot, protectSignup, sensitiveInfo, shield, slidingWindow, fixedWindow }

export default arcjet({
  key: process.env.ARCJET_KEY!,

  characteristics: [ "fingerprint" ],

  rules: [
    shield({
      mode:"LIVE",
    })
  ],
})