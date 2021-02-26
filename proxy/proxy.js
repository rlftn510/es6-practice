// proxy 사전적 의미 : 대리, 대신

const target = {food : '밥'}

const handler = {
   get(target, key) {
      return target[key] + ',수저'
   },
   set(target, key) {}
}
const middle = new Proxy(target, handler)

const left = middle.food
console.log(left)

const obj = Proxy

const obj2 = Proxy.revocable(target, handler)
// obj2.revoke()

debugger