import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

const TextEditor = ({ editorRef, editorValue, editorHeight, onEditorChange }) => {
  return (
    <Editor
      ref={editorRef} // DOM 선택용 useRef
      // placeholder="please write here..."
      // previewStyle="vertical" // 미리보기 스타일 지정
      height={editorHeight} // 에디터 창 높이
      initialEditType="markdown"
      useCommandShortcut={false}
      toolbarItems={[
        ['heading', 'bold', 'italic', 'strike'],
        ['hr', 'quote'],
        ['ul', 'ol'],
        ['table', 'link'],
        ['code', 'codeblock'],
      ]}
      initialValue={editorValue}
      hideModeSwitch={true}
      onChange={onEditorChange ? onEditorChange : () => {}}
    />
  );
};

export default TextEditor;
