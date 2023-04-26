const CONSTANTS={
    PORT:3000,
    callbackUrlDomain:'https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=86wbcx15zgrlss&scope=r_liteprofile&state=someRandomString&redirect_uri=http://localhost:3000/s',
    callbackUrl:'/auth/linkedin/callback',
    authUrl:'/auth/linkedin',
    successUrl:'/',
    failureUrl:'/login',
    linkedInScopes: ["r_liteprofile"],
    strategy:'linkedin'
    }
    
    module.exports=CONSTANTS;
