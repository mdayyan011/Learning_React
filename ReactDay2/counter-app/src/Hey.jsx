import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
export const Hey = () => {
  const params = useParams();
  return (
    <>
      <div>
        <HashLink to='#last'>
          <h2>First</h2>
        </HashLink>
        <h3>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available. It is also
          used to temporarily replace text in a process called greeking, which
          allows designers to consider the form of a webpag
        </h3>
      </div>
      <div>
        <Link to='/footer'>
          <h2>Second</h2>
          <h3>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before the final copy is available. It is also
            used to temporarily replace text in a process called greeking, which
            allows designers to consider the form of a webpag
          </h3>
        </Link>
      </div>
      <div>
        <h2>3</h2>
        <h3>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available. It is also
          used to temporarily replace text in a process called greeking, which
          allows designers to consider the form of a webpag
        </h3>
      </div>
      <div>
        <h2>4</h2>
        <h3>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available. It is also
          used to temporarily replace text in a process called greeking, which
          allows designers to consider the form of a webpag
        </h3>
      </div>
      <div>
        <h2>5</h2>
        <h3>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available. It is also
          used to temporarily replace text in a process called greeking, which
          allows designers to consider the form of a webpag
        </h3>
      </div>
      <div>
        <h2>6</h2>
        <h3>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available. It is also
          used to temporarily replace text in a process called greeking, which
          allows designers to consider the form of a webpag
        </h3>
      </div>
      <div>
        <h2>7</h2>
        <h3>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available. It is also
          used to temporarily replace text in a process called greeking, which
          allows designers to consider the form of a webpag
        </h3>
      </div>
      <div>
        <h2>8</h2>
        <h3>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available. It is also
          used to temporarily replace text in a process called greeking, which
          allows designers to consider the form of a webpag
        </h3>
      </div>
      <div id='last'>
        <h2>9</h2>
        <h3>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available. It is also
          used to temporarily replace text in a process called greeking, which
          allows designers to consider the form of a webpag
        </h3>
      </div>
    </>
  );
};
