import React from 'react';
import slugify from 'slugify';
import {Link} from "gatsby";
import setupTags from '../utils/setupTags';

const TagsList = ({recipes}) => {
  const newTags = setupTags(recipes);
  return (
    <div className="tags-container">
      <h5>przepisy</h5>
      <div className="tags-list">
        {newTags.map(([tag, tagNum], index) => {
          const slug = slugify(tag,{lower:true})
          return (
            <Link
            to={`/tags/${slug}`}
            key={index}>
            {tag} ({tagNum})
          </Link>
        )})}
      </div>
    </div>
  );
};

export default TagsList;