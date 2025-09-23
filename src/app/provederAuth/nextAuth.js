import GoogleProvider from "next-auth/providers/google"
export const authOptions = {
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      
    })
    

  ],

  session :{
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
jwt :{
  // A secret to use for key generation (you should set this explicitly)
},
callbacks :{
  // async signIn({ user, account, profile, email, credentials }) { return true },
}
}