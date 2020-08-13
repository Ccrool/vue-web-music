// 主题模式
export const THEME_KEY = '__theme__'
export const THEME_TYPES = {
  dark: 'dark',
  light: 'light'
}

// 侧栏菜单默认list
export const DEFAULT_MENU_LIST = [{
  name: 'discovery',
  meta: {
    title: '发现音乐',
    icon: 'music',
  },
  path: '/discovery'
}, {
  name: 'playlists',
  meta: {
    title: '推荐歌单',
    icon: 'playlist-menu'
  },
  path: '/playlists'
}, {
  name: 'songs',
  meta: {
    title: '最新音乐',
    icon: 'yinyue'
  },
  path: '/songs'
}, {
  name: 'mvs',
  meta: {
    title: '最新MV',
    icon: 'mv'
  },
  path: '/mvs'
}]