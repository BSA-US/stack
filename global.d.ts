declare module '*.md' {
  const content: string
  export default content
}

declare module 'remark-react' {
  const remark2react: Parameters<ReturnType<typeof import('remark')>['use']>[0]
  export default remark2react
}
