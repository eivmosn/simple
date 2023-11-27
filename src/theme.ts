const root = `
:root{
   --fc-border-base: rgb(208, 215, 222);
   --fc-icon-color: #656D76;
   --fc-background-dark: #edeff3;
   --fc-background-content: #fff;
   --fc-collapse-background: rgb(246, 248, 250);
}

html.dark {
   --fc-background-dark: #000;
    --fc-background-base: rgb(30, 30, 30);
    --fc-background-light: rgb(51, 51, 51);
    --fc-background-content: #252526;
    --fc-border-base: rgba(255, 255, 255, 0.09);
    --fc-icon-color: #c5c5c5;
    --fc-collapse-background: var(--fc-background-light);
}

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body,
#app {
    height: 100%;
    overflow: hidden;
}

.indicator {
    border: none !important;
    border-left: 2px solid #2080F0 !important;
    min-height: 50px !important;
    max-height: 50px !important;
    height: 50px !important;
}

.indicator div {
    display: none !important;
}

.fc-collapse .n-collapse-item__content-inner {
    padding-top: 0 !important;
    border-bottom: 1px solid var(--fc-border-base);
}

.fc-collapse .n-collapse-item__header-main {
    padding: 5px 8px;
    background-color: var(--fc-collapse-background);
}

.fc-collapse .n-collapse-item__header-main {
    border-bottom: 1px solid var(--fc-border-base);
}
`
export default `${root}`
