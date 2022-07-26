function truncateString(str, number){
    //clear out that junk in your 
    if(number >= str.lenght) return str;
    if (number <= 3) return str.slice(0, num) + "...";

    return str.slice(0, number-3) + "...";
    return str + repeatStringNumTimes(str, number-1);
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
console.log(truncateString("tomy goes to work", 4));

