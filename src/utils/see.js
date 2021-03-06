// Utilities for working with 'see' links. Used as part of /wrappers/json.js

import React from 'react';
import See from '../components/See';
import DocParse from '../components/DocParse';

export const renderSeeTags = (member) => {
	const sees = member.sees || [];
	return sees.map((tag, idx) => {
		// Convert paragraph tags to inline elements so they fit inside the See component properly.
		if (tag.children) {
			tag.children.map((child) => {
				if (child.type === 'paragraph') {
					child.type = 'inline';
				}
			});
		}
		return (
			<DocParse key={idx} component={See}>
				{tag}
			</DocParse>
		);
	});
};

export default renderSeeTags;
