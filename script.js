const contents = document.querySelectorAll('.content');
const boxLeft = document.getElementById('box-left');
const boxRight = document.getElementById('box-right');

const boxes = [boxLeft, boxRight];

let draggedItem = null;

contents.forEach(item => {
  item.addEventListener('dragstart', () => {
    draggedItem = item;
    item.classList.add('dragging');
  });
  
  item.addEventListener('dragend', () => {
    item.classList.remove('dragging');
    draggedItem = null;
  });
});

 boxes.forEach(box => {
  box.addEventListener('dragover', e => {
    e.preventDefault(); 
  });

  box.addEventListener('drop', () => {
    if (draggedItem) {
      box.appendChild(draggedItem);
    }
  });
});

