import { useGlobals } from "@storybook/manager-api";
// Define the tool, panel, and tab componentss

export const Tool = ({ api }) => {
    const [{ fontSize }, updateGlobals] = useGlobals();
  
    const handleFontSizeChange = (newSize) => {
      updateGlobals({ fontSize: newSize });
    };
  
    return (
      <select
        value={fontSize || "16px"}
        onChange={(e) => handleFontSizeChange(e.target.value)}
      >
        <option value="12px">Small (12px)</option>
        <option value="16px">Medium (16px)</option>
        <option value="20px">Large (20px)</option>
        <option value="24px">Extra Large (24px)</option>
      </select>
    );
  };

  export const Panel = ({ active }) => {
    const [{ fontSize }, updateGlobals] = useGlobals();
  
    const handleCustomFontSize = (e) => {
      updateGlobals({ fontSize: e.target.value });
    };
  
    if (!active) return null;
  
    return (
      <div>
        <input
          type="text"
          value={fontSize || "16px"}
          onChange={handleCustomFontSize}
          placeholder="Enter custom font size (e.g., 18px)"
        />
        <p style={{ fontSize }}>Preview: The quick brown fox jumps over the lazy dog.</p>
      </div>
    );
  };

  export const Tab = ({ active }) => {
    return <Panel active={active} />;
  };


  