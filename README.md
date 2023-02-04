## Next.js

- 프론트엔드 프레임워크(기계/미리 정의되어 있음)

## Next.js의 3+1 Data Fetching 방법

- SSR(Server Side Render) : getServerSideProps
- CSR(Client Side Render) : 기존 React 사용법과 동일
- SSG(Static-Site Generation) : getStaticProps (with getStaticPaths)
- ISR(Incremental Static Regeneration) : getStaticProps with revalidate

## Nexted routes --> file-system

- pages/product/first-item.js -> /product/first-item

### slug

- pages/category/[slug].js -> /category/:slug
- pages/[username]/info.js -> /:username/info

### Shallow Routing

- Dynamic Routes -> slug를 활용하는 방법
- 다중 slug -> [user]/[info].js / [...slug].js
- 옵셔널 slug -> [[...slug]].js
- shallow Routing -> router.push(url, undefined, {shallow:true})

### url을 바꾸는 방식

- location.replace('url') : 로컬 state 유지 안됨(리렌더)
- route.push(url) : 로컬 state 유지 / data fetching은 일어남
- route.push(url, as, {shallow: true}) : 로컬 state 유지 / data fetching 안일어남

## Prettier 설정

- yarn add -D prettier
- .prettierrc

```
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false
}
```

- .prettierignore

```
node_modules
.next
public
```

- package.json에 prettier-fix 명령어 추가

## API Routes

- API : 프로그램 간의 연결
- API Routes : Routing과 동일(파일기반 / Dynamic)
- Middleware : 기본으로 제공되는 built in 외 추가 가능

### Response

- res.status(code)
- res.json(body) : serializable object
- res.redirect(code, url)
- res.send(body) : string / object/ Buffer
