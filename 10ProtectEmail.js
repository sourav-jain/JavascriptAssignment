var avg, splitted, part1, part2;
function ProtectEmail(user_email) {
    splitted = user_email.split("@");
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 = splitted[1];
    return part1 + "...@" + part2;
};

console.log(ProtectEmail("sjain29aug@gmail.com"));
// console.log(splitted)
// console.log(part1)
// console.log(part2)
// console.log(avg)
