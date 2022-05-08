export const update_task = (item) => {
    const newStatus = item.classList.contains('ready') ? 'to do' : 'ready';
    item.classList.toggle('ready')
}