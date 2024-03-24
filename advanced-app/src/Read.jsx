import './index.css';
import { HashLink } from 'react-router-hash-link';
const Read = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Read</h1>
      <div className='listing-style'>
        <HashLink to='#one'>
          <li>1</li>
        </HashLink>
        <HashLink to=''>
          <li>2</li>
        </HashLink>
        <HashLink to=''>
          <li>3</li>
        </HashLink>
        <HashLink to=''>
          <li>4</li>
        </HashLink>
        <HashLink to=''>
          <li>5</li>
        </HashLink>
        <HashLink to='#six'>
          <li>6</li>
        </HashLink>
      </div>
      <div id='one'>
        <h2>1</h2>
        <p>
          In publishing and graphic <HashLink to='#six'>design</HashLink>, Lorem
          ipsum is a placeholder text commonly used to demonstrate the visual
          form of a document or a typeface without relying on meaningful
          content. Lorem ipsum may be used as a placeholder before the final
          copy is available. It is also used to temporarily replace text in a
          process called greeking, which allows designers to consider the form
          of a webpage or publication.
        </p>
      </div>
      <div>
        <h2>2</h2>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available. It is also
          used to temporarily replace text in a process called greeking, which
          allows designers to consider the form of a webpage or publication.
        </p>
      </div>
      <div>
        <h2>3</h2>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available. It is also
          used to temporarily replace text in a process called greeking, which
          allows designers to consider the form of a webpage or publication.
        </p>
      </div>
      <div>
        <h2>4</h2>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available. It is also
          used to temporarily replace text in a process called greeking, which
          allows designers to consider the form of a webpage or publication.
        </p>
      </div>
      <div>
        <h2>5</h2>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available. It is also
          used to temporarily replace text in a process called greeking, which
          allows designers to consider the form of a webpage or publication.
        </p>
      </div>
      <div id='six'>
        <h2>6</h2>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available. It is also
          used to temporarily replace text in a process called greeking, which
          allows designers to consider the form of a webpage or publication.
        </p>
      </div>
    </div>
  );
};
export default Read;
