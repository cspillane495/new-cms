
export function setToken(token){
    if(!token) {
        // console.log('Hit')
        return sessionStorage.clear()
    }
    const tok = token.split(".");
    tok.map((token, i) => {
        sessionStorage.setItem(`tok${i}`,token)
    })
    sessionStorage.setItem('tokeDate',new Date())
} 

export function getToken () {
    const tok1 = sessionStorage.getItem('tok0')
    const tok2 = sessionStorage.getItem('tok1')
    const tok3 = sessionStorage.getItem('tok2')

    const finalTok = `${tok1}.${tok2}.${tok3}`

    return finalTok;
}