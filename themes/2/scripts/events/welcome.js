const logger = require('hexo-log')()

hexo.on('ready', () => {
  const { version } = require('../../package.json')
  console.log(`┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  ● ● ○                                                                     ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃                                                                            ┃
┃  █████   ██  ██     ██ ███████ ██      █  █████   ██    █████   ██      █  ┃
┃  █    █      █ █   █ █ █       █ █     █ █             █     █  █ █     █  ┃
┃  █    █ ████ █  █ █  █ █       █  █    █ █       ████  █     █  █  █    █  ┃
┃  █    █  ██  █   █   █ ██████  █   █   █  ████    ██   █     █  █   █   █  ┃
┃  █    █  ██  █       █ █       █    █  █      █   ██   █     █  █    █  █  ┃
┃  █    █  ██  █       █ █       █     █ █      █   ██   █     █  █     █ █  ┃
┃  █████  ████ █       █ ███████ █      ██ █████   ████   █████   █      ██  ┃
┃                                                                            ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃                                                                            ┃
┃                         version：${version}                                     ┃
┃                    by Aegcbx - https://ezgx.site/                          ┃
┃           →→★ https://github.com/ezgx/hexo-theme-dimension/                ┃
┃                                                                            ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`);
})
