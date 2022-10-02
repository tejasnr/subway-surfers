function moveleft()
{
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left -= 100;
    character.style.left = left + "px";
}

function moveright()
{
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left += 100;
    character.style.left = left + "px";
}
document.addEventListener("keydown", Event =>
{
    if(Event.key==="arrowleft"){moveleft()}
    if(Event.key==="arrowright"){moveright()}

})