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
