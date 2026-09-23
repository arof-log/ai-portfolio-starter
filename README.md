# AI Portfolio Starter

작품 포트폴리오 + Journal을 위한 무료 배포용 Astro 스타터입니다.

## 로컬 실행

```bash
npm install
npm run dev
```

## 콘텐츠 위치

- 작품: `src/content/works/*.md`
- 게시글: `src/content/posts/*.md`
- 이미지: `public/uploads/`
- CMS 설정: `.pages.yml`

## Pages CMS

1. GitHub에 이 프로젝트를 업로드합니다.
2. https://app.pagescms.org 에 GitHub로 로그인합니다.
3. GitHub App을 저장소에 연결합니다.
4. 저장소를 열면 `.pages.yml` 설정을 읽어 Works / Journal 편집 화면이 나타납니다.

## Cloudflare Pages 배포

GitHub 저장소를 Cloudflare Pages에 연결한 뒤:

- Build command: `npm run build`
- Build directory: `dist`
- Production branch: `main`

으로 설정합니다.

## 가장 먼저 바꿀 것

1. `src/layouts/BaseLayout.astro`의 `STUDIO ARCHIVE` 이름
2. `src/pages/index.astro`의 메인 문구와 이메일
3. 샘플 작품/게시글 삭제 후 본인 콘텐츠 등록
4. 필요하면 `src/styles/global.css`에서 색상과 타이포그래피 변경
