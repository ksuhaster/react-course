import React from 'react';
import './styles.scss';
import { CommentsCounter } from '../../Assets/CommentsCounter';
import { LikesCounter } from '../../Assets/LikesCounter';
import { Share } from '../../Assets/Share';
import { Tag } from '../../Assets/Tag';

export const Article = (props) => {
  const source = props.source;
  const tags = props.source.tags.map((tag, i) => (
    <Tag text = { tag }/>
  ));

  return (
    <>
        <div className="article">
            {/*как вставить background-image: {img}? */}
            <img className="article-img" src={ source.image } />
            { tags }
            <h3><a className="article-title" href="/news/">{ source.title }</a></h3>
            <p>{source.description}</p>

            <table width="100%">
            <tr>
            <td align="left">15.07.2017</td>
            <td align="right">
                {/*этим тоже надо будет пробросить значения для отображения*/}
                <CommentsCounter />
                <LikesCounter />
                <Share />
            </td>
            </tr>
            </table>

        </div>
    </>
  )
};
