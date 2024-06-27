const ranking = (place: number) => {
  let format_place: string = place.toString();

  if (format_place.slice(0, 1) === "1") {
    format_place += "th";
  } else {
    switch (format_place.slice(-1)) {
      case "1":
        format_place += "st";
        break;
      case "2":
        format_place += "nd";
        break;
      case "3":
        format_place += "rd";
        break;
      default:
        format_place += "th";
        break;
    }
  }

  return format_place;
};

export default ranking;
