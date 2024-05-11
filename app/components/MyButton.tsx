type MyButton = {
  count: number,
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

export default function MyButton({ count, onClick }: MyButton) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}