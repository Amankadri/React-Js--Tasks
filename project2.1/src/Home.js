import {useState, useEffect} from 'react';
export default function Home(props) {

  const [scrollPosition, setScrollPosition] = useState(0);    
  const [top, setTop] = useState(true)
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    if (scrollPosition === 0) {
      setTop(true)
    } else if (scrollPosition > 10) {
      setTop(false)
    } else if (scrollPosition < 10) {
      setTop(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <div className={`${top ? 'bg-blue-500' : "bg-red-500"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque id minima ducimus repellendus a nisi, voluptatibus iusto totam perferendis blanditiis recusandae nihil fuga earum ipsa amet placeat provident cumque inventore.
            <br />

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque id minima ducimus repellendus a nisi, voluptatibus iusto totam perferendis blanditiis recusandae nihil fuga earum ipsa amet placeat provident cumque inventore.
            <br />

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque id minima ducimus repellendus a nisi, voluptatibus iusto totam perferendis blanditiis recusandae nihil fuga earum ipsa amet placeat provident cumque inventore.
            <br />

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque id minima ducimus repellendus a nisi, voluptatibus iusto totam perferendis blanditiis recusandae nihil fuga earum ipsa amet placeat provident cumque inventore.
            <br />

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque id minima ducimus repellendus a nisi, voluptatibus iusto totam perferendis blanditiis recusandae nihil fuga earum ipsa amet placeat provident cumque inventore.
            <br />

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque id minima ducimus repellendus a nisi, voluptatibus iusto totam perferendis blanditiis recusandae nihil fuga earum ipsa amet placeat provident cumque inventore.
            <br />

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque id minima ducimus repellendus a nisi, voluptatibus iusto totam perferendis blanditiis recusandae nihil fuga earum ipsa amet placeat provident cumque inventore.
            <br />

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque id minima ducimus repellendus a nisi, voluptatibus iusto totam perferendis blanditiis recusandae nihil fuga earum ipsa amet placeat provident cumque inventore.
            <br />

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque id minima ducimus repellendus a nisi, voluptatibus iusto totam perferendis blanditiis recusandae nihil fuga earum ipsa amet placeat provident cumque inventore.
            <br />

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque id minima ducimus repellendus a nisi, voluptatibus iusto totam perferendis blanditiis recusandae nihil fuga earum ipsa amet placeat provident cumque inventore.
            <br />

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque id minima ducimus repellendus a nisi, voluptatibus iusto totam perferendis blanditiis recusandae nihil fuga earum ipsa amet placeat provident cumque inventore.
            <br />

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque id minima ducimus repellendus a nisi, voluptatibus iusto totam perferendis blanditiis recusandae nihil fuga earum ipsa amet placeat provident cumque inventore.
            <br />

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque id minima ducimus repellendus a nisi, voluptatibus iusto totam perferendis blanditiis recusandae nihil fuga earum ipsa amet placeat provident cumque inventore.
            <br />

             Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque id minima ducimus repellendus a nisi, voluptatibus iusto totam perferendis blanditiis recusandae nihil fuga earum ipsa amet placeat provident cumque inventore.
            <br />

             Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque id minima ducimus repellendus a nisi, voluptatibus iusto totam perferendis blanditiis recusandae nihil fuga earum ipsa amet placeat provident cumque inventore.
            <br />

             Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque id minima ducimus repellendus a nisi, voluptatibus iusto totam perferendis blanditiis recusandae nihil fuga earum ipsa amet placeat provident cumque inventore.
            <br />


             Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque id minima ducimus repellendus a nisi, voluptatibus iusto totam perferendis blanditiis recusandae nihil fuga earum ipsa amet placeat provident cumque inventore.
            <br />

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque id minima ducimus repellendus a nisi, voluptatibus iusto totam perferendis blanditiis recusandae nihil fuga earum ipsa amet placeat provident cumque inventore.
            <br />

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque id minima ducimus repellendus a nisi, voluptatibus iusto totam perferendis blanditiis recusandae nihil fuga earum ipsa amet placeat provident cumque inventore.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque id minima ducimus repellendus a nisi, voluptatibus iusto totam perferendis blanditiis recusandae nihil fuga earum ipsa amet placeat provident cumque inventore.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque id minima ducimus repellendus a nisi, voluptatibus iusto totam perferendis blanditiis recusandae nihil fuga earum ipsa amet placeat provident cumque inventore.
            <br />

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque id minima ducimus repellendus a nisi, voluptatibus iusto totam perferendis blanditiis recusandae nihil fuga earum ipsa amet placeat provident cumque inventore.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque id minima ducimus repellendus a nisi, voluptatibus iusto totam perferendis blanditiis recusandae nihil fuga earum ipsa amet placeat provident cumque inventore.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque id minima ducimus repellendus a nisi, voluptatibus iusto totam perferendis blanditiis recusandae nihil fuga earum ipsa amet placeat provident cumque inventore.
            <br />

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque id minima ducimus repellendus a nisi, voluptatibus iusto totam perferendis blanditiis recusandae nihil fuga earum ipsa amet placeat provident cumque inventore.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque id minima ducimus repellendus a nisi, voluptatibus iusto totam perferendis blanditiis recusandae nihil fuga earum ipsa amet placeat provident cumque inventore.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque id minima ducimus repellendus a nisi, voluptatibus iusto totam perferendis blanditiis recusandae nihil fuga earum ipsa amet placeat provident cumque inventore.
            <br />
    </div>
  ) 
}