import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jsonInput: string = '';
  searchTerm: string = '';
  searchResults: any[] = [];
  currentSearchIndex: number = -1;
  errorMessage: string = '';
  isCompressed: boolean = false;

  formatJson(): void {
    this.errorMessage = '';
    this.searchResults = [];
    this.currentSearchIndex = -1;
    
    if (!this.jsonInput.trim()) {
      this.errorMessage = 'Please enter some JSON to format.';
      return;
    }

    try {
      const parsed = JSON.parse(this.jsonInput);
      this.jsonInput = JSON.stringify(parsed, null, 2);
      this.isCompressed = false;
    } catch (error: any) {
      this.errorMessage = 'Invalid JSON: ' + error.message;
    }
  }

  compressJson(): void {
    this.errorMessage = '';
    this.searchResults = [];
    this.currentSearchIndex = -1;
    
    if (!this.jsonInput.trim()) {
      this.errorMessage = 'Please enter some JSON to compress.';
      return;
    }

    try {
      const parsed = JSON.parse(this.jsonInput);
      this.jsonInput = JSON.stringify(parsed);
      this.isCompressed = true;
    } catch (error: any) {
      this.errorMessage = 'Invalid JSON: ' + error.message;
    }
  }

  searchInJson(): void {
    this.errorMessage = '';
    this.searchResults = [];
    this.currentSearchIndex = -1;

    if (!this.searchTerm.trim()) {
      return;
    }

    if (!this.jsonInput.trim()) {
      this.errorMessage = 'Please enter some JSON to search.';
      return;
    }

    try {
      const jsonString = this.jsonInput;
      const searchLower = this.searchTerm.toLowerCase();
      const lines = jsonString.split('\n');
      
      lines.forEach((line, index) => {
        if (line.toLowerCase().includes(searchLower)) {
          this.searchResults.push({
            line: index + 1,
            content: line.trim(),
            index: index
          });
        }
      });

      if (this.searchResults.length === 0) {
        this.errorMessage = `No results found for "${this.searchTerm}"`;
      } else {
        this.currentSearchIndex = 0;
        this.highlightSearchTerm();
      }
    } catch (error: any) {
      this.errorMessage = 'Error searching JSON: ' + error.message;
    }
  }

  highlightSearchTerm(): void {
    if (this.searchResults.length === 0 || this.currentSearchIndex < 0) {
      return;
    }

    const result = this.searchResults[this.currentSearchIndex];
    const textarea = document.getElementById('jsonInput') as HTMLTextAreaElement;
    
    if (textarea) {
      const lines = this.jsonInput.split('\n');
      let position = 0;
      
      for (let i = 0; i < result.index; i++) {
        position += lines[i].length + 1; // +1 for newline
      }
      
      textarea.focus();
      textarea.setSelectionRange(position, position + lines[result.index].length);
      textarea.scrollTop = textarea.scrollHeight * (result.index / lines.length);
    }
  }

  nextSearchResult(): void {
    if (this.searchResults.length > 0) {
      this.currentSearchIndex = (this.currentSearchIndex + 1) % this.searchResults.length;
      this.highlightSearchTerm();
    }
  }

  previousSearchResult(): void {
    if (this.searchResults.length > 0) {
      this.currentSearchIndex = this.currentSearchIndex <= 0 
        ? this.searchResults.length - 1 
        : this.currentSearchIndex - 1;
      this.highlightSearchTerm();
    }
  }

  copyToClipboard(): void {
    if (!this.jsonInput) {
      return;
    }

    navigator.clipboard.writeText(this.jsonInput).then(() => {
      const button = document.querySelector('.copy-btn') as HTMLElement;
      if (button) {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = originalText;
        }, 2000);
      }
    }).catch(err => {
      this.errorMessage = 'Failed to copy to clipboard';
    });
  }

  clearAll(): void {
    this.jsonInput = '';
    this.searchTerm = '';
    this.searchResults = [];
    this.currentSearchIndex = -1;
    this.errorMessage = '';
    this.isCompressed = false;
  }
}
