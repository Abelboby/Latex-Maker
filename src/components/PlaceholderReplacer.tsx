import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clipboard, Upload } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";

const PlaceholderReplacer = () => {
  const [template, setTemplate] = useState('');
  const [placeholders, setPlaceholders] = useState([]);
  const [replacements, setReplacements] = useState({});
  const [modifiedContent, setModifiedContent] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [alert, setAlert] = useState('');

  const readPlaceholdersFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      const placeholderList = content
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0);
      setPlaceholders(placeholderList);
      setReplacements({});
    };
    reader.readAsText(file);
  };

  const readTemplateFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setTemplate(e.target.result);
    };
    reader.readAsText(file);
  };

  const displayPlaceholder = (placeholder) => {
    return placeholder.replace(/[{}]/g, '');
  };

  const handleInputChange = (placeholder, value) => {
    setReplacements(prev => ({
      ...prev,
      [placeholder]: value
    }));
  };

  const generateResult = () => {
    let result = template;
    Object.entries(replacements).forEach(([placeholder, value]) => {
      // Create a RegExp to replace all instances globally
      const regex = new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      result = result.replace(regex, value);
    });
    setModifiedContent(result);
    setShowResult(true);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(modifiedContent);
      setAlert('Content copied to clipboard!');
      setTimeout(() => setAlert(''), 3000);
    } catch (err) {
      setAlert('Failed to copy content. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Placeholder Replacement Tool</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* File Upload Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium">Upload Template File</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="file"
                    onChange={(e) => e.target.files?.[0] && readTemplateFile(e.target.files[0])}
                    className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                  />
                  <Upload size={20} className="text-gray-500" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium">Upload Placeholders File</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="file"
                    onChange={(e) => e.target.files?.[0] && readPlaceholdersFile(e.target.files[0])}
                    className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                  />
                  <Upload size={20} className="text-gray-500" />
                </div>
              </div>
            </div>

            {/* Placeholders Input Section */}
            {placeholders.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Enter Replacements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {placeholders.map((placeholder) => (
                    <div key={placeholder} className="space-y-1">
                      <label className="block text-sm font-medium">
                        {displayPlaceholder(placeholder)}
                      </label>
                      <input
                        type="text"
                        value={replacements[placeholder] || ''}
                        onChange={(e) => handleInputChange(placeholder, e.target.value)}
                        className="w-full p-2 border rounded-md"
                        placeholder={`Enter ${displayPlaceholder(placeholder).toLowerCase()}`}
                      />
                    </div>
                  ))}
                </div>
                <Button 
                  onClick={generateResult}
                  className="w-full md:w-auto"
                >
                  Generate Result
                </Button>
              </div>
            )}

            {/* Result Section */}
            {showResult && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Result</h3>
                  <Button
                    onClick={copyToClipboard}
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    <Clipboard size={16} />
                    Copy to Clipboard
                  </Button>
                </div>
                <pre className="p-4 bg-gray-100 rounded-lg overflow-x-auto whitespace-pre-wrap">
                  {modifiedContent}
                </pre>
              </div>
            )}

            {/* Alert */}
            {alert && (
              <Alert className="mt-4">
                <AlertDescription>{alert}</AlertDescription>
              </Alert>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlaceholderReplacer;