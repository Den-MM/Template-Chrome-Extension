

function changeBackgroundColor(classes: string, color: string) {
  const element = document.querySelector(`.${classes.split(' ').join(' .')}`);
    console.log (classes.split(' ').join('.'));
   if (element) {
     (element as HTMLElement).style.backgroundColor = color;
   }
}

changeBackgroundColor('flex h-[44px] items-center justify-between', 'yellow');
