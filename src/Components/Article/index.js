import React from 'react';
import './styles.scss';
import { CommentsCounter } from '../../Assets/CommentsCounter';
import { LikesCounter } from '../../Assets/LikesCounter';
import { Share } from '../../Assets/Share';
import { Tag } from '../../Assets/Tag';

export const Article = (article) => {
  
  var tags_arr = article.tags.split(',').map(item => item.trim());
  const tags_group = tags_arr.map((tag, i) => (
    <Tag key = { i }
         source = { tag }
    />
  ));

  var created = new Date(article.created)
  const created_formatted = ('0' + created.getDate()).slice(-2) + '.'
    + ('0' + (created.getMonth()+1)).slice(-2) + '.'
    + created.getFullYear();

  var tdstyleImage = {
    backgroundImage: `url(${ article.poster })`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '300px 300px',
    width: '300px',
    height: '250px',
    verticalAlign: 'bottom',
    paddingBottom: '20px',
    paddingLeft: '30px',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
  }

  return (
    <>
        <span className="article">
          <table width="100%" cellSpacing="0" cellPadding="0" border="0">
            <tbody>
              <tr>
                <td style={ tdstyleImage } colSpan="2">
                  { tags_group }
                </td>
              </tr>
              <tr>
                <td colSpan="2" className="td-text-left td-text-main">
                  <h3><a className="article-title" href="/news/">{ article.title }</a></h3>
                  <p>{article.description}</p>
                </td>
              </tr>
              <tr>
                <td align="left" valign="bottom" nowrap="true" className="td-text">{ created_formatted }</td>
                <td align="right" valign="bottom" nowrap="true" className="td-text-right">
                    <CommentsCounter counts = { article.comments } />
                    &nbsp;
                    <LikesCounter counts = { article.likes } />
                    &nbsp;
                    <Share />
                </td>
              </tr>
            </tbody>
          </table>

        </span>
    </>
  )
};
