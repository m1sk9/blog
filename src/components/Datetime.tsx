import type { CollectionEntry } from 'astro:content';
import { LOCALE, SITE } from '@config';

interface DatetimesProps {
  pubDatetime: string | Date;
  modDatetime: string | Date | undefined | null;
}

interface EditPostProps {
  editPost?: CollectionEntry<'blog'>['data']['editPost'];
  postId?: CollectionEntry<'blog'>['id'];
}

interface Props extends DatetimesProps, EditPostProps {
  size?: 'sm' | 'lg';
  className?: string;
}

export default function Datetime({
  pubDatetime,
  modDatetime,
  size = 'sm',
  className = '',
  editPost,
  postId,
}: Props) {
  return (
    <div className={`flex items-center opacity-50 ${className}`.trim()}>
      {modDatetime && modDatetime > pubDatetime ? (
        <span className={`italic ${size === 'sm' ? 'text-sm' : 'text-base'}`}>
          Updated:
        </span>
      ) : (
        <span className="sr-only">Published:</span>
      )}
      <span className={`italic ${size === 'sm' ? 'text-sm' : 'text-base'}`}>
        <FormattedDatetime
          pubDatetime={pubDatetime}
          modDatetime={modDatetime}
        />
        {size === 'lg' && <EditPost editPost={editPost} postId={postId} />}
      </span>
    </div>
  );
}

const FormattedDatetime = ({ pubDatetime, modDatetime }: DatetimesProps) => {
  const myDatetime = new Date(
    modDatetime && modDatetime > pubDatetime ? modDatetime : pubDatetime,
  );

  const date = myDatetime.toLocaleDateString(LOCALE.langTag, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const time = myDatetime.toLocaleTimeString(LOCALE.langTag, {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <>
      <time dateTime={myDatetime.toISOString()}>{date}</time>
      <span aria-hidden="true"> | </span>
      <span className="sr-only">&nbsp;at&nbsp;</span>
      <span className="text-nowrap">{time}</span>
    </>
  );
};

const EditPost = ({ editPost, postId }: EditPostProps) => {
  let editPostUrl = editPost?.url ?? SITE?.editPost?.url ?? '';
  const showEditPost = !editPost?.disabled && editPostUrl.length > 0;
  const appendFilePath =
    editPost?.appendFilePath ?? SITE?.editPost?.appendFilePath ?? false;
  if (appendFilePath && postId) {
    editPostUrl += `/${postId}`;
  }
  const editPostText = editPost?.text ?? SITE?.editPost?.text ?? 'Edit';

  return (
    showEditPost && (
      <>
        <span aria-hidden="true"> | </span>
        <a
          className="space-x-1.5 hover:opacity-75"
          href={editPostUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="text-base italic">{editPostText}</span>
        </a>
      </>
    )
  );
};
