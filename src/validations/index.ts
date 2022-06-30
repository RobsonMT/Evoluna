const phoneRegex = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/;
const timeAMPMRegex = /^(0[0-9]|1[0-2]):[0-5][0-9] (AM|PM)$/;
const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
const birthDateRegex =
  /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/;

export { phoneRegex, timeAMPMRegex, birthDateRegex, cpfRegex };
