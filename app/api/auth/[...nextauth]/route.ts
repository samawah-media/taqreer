import NextAuth from "next-auth";
import LinkedInProvider from "next-auth/providers/linkedin";

export const authOptions = {
    providers: [
        LinkedInProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID || "",
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET || "",
            authorization: {
                params: { scope: "openid profile email" },
            },
            issuer: "https://www.linkedin.com",
            jwks_endpoint: "https://www.linkedin.com/oauth/openid/jwks",
            profile(profile) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                };
            },
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }: any) {
            // Here we will trigger the Lead Capture logic (saving to Supabase)
            // and then allow the landing page to trigger the download.
            return true;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
