export function switchBackgroundColor(backgroundCount: number) {
  switch (backgroundCount) {
    case 1:
      return "#000000";
    case 2:
      return "#272626";
    case 3:
      return "#3A3A3A";
    case 4:
      return "#616161";
    case 5:
      return "#888787";
    default:
      return "black";
  }
}
