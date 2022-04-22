/**
 * body标签滚动
 * @param duration - 显示滚动条的延迟时间
 */
export default function useBodyScroll(duration = 300) {
  const defaultStyle = {
    overflow: '',
  };
  function setScrollBodyStyle() {
    document.body.style.overflow = 'hidden';
  }
  function resetScrollBodyStyle() {
    document.body.style.overflow = defaultStyle.overflow;
  }
  /**
   * 处理body的滚动条
   * @param hideScroll - 禁止滚动
   */
  function scrollBodyHandler(hideScroll: boolean) {
    if (hideScroll) {
      setScrollBodyStyle();
    } else {
      setTimeout(() => {
        resetScrollBodyStyle();
      }, duration);
    }
  }
  return {
    scrollBodyHandler,
  };
}
