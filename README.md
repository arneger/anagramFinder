# anagramFinder
Anagramify (Finds anagram matches) 

This is a website where you can write letters, words or names in an
input field and get anagram matches displayed on the screen. 
If the radio button "Words" is enabled and you for instance type 
"dueioncat" in the input field folllowed by clicking 
on the search button (or pressing enter), three words will be displayed on the screen. 
The words that will be displayed are "AUCTIONED", "CAUTIONED" and "EDUCATION".
If the radio button "Names" is enabled and you search for "lnleea", then 
"ALLEEN", "ALLENE" and "ELLENA" will be displayed. 
If there's no matches there will be displayed a message saying
"Name/Word anagrams for "your input" was not found". 

#### The JSON files
I created two JSON files. One containing 58 110 english
words and one containing 5163 common english names. I found two txt files
containing all these words and names. To create the JSON files I made a
simple Python script that read a txt file and wrote the words/names to a JSON file.
The alphabetically sorted version of a name or word is used as a key in
the JSON file. The value of the key is an array with all the 
words/names that are equal (after beeing sorted alphabetically) to the key.
Here's an example of how a key and value in the JSON file could look like
if "bca" and "cba" were words from the txt file: {"abc": ["bca", "cba"]}.
By having the JSON files strctured this way, it's very easy to find anagram matches,
all you need is to type a word, sort it and search for it in the JSON file.
You can see how the JSON files was made in the python code bellow.

```python
import json

file = open('englishnames.txt', 'r', encoding='utf-8')
englishwords = file.read()
splitwords = englishwords.split("\n")
thedict = {}
for x in splitwords:
    x = x.lower()
    word = "".join(sorted(x))
    if word in thedict.keys():
        thedict[word].append(x)
    else:
        thedict[word] = [x]

with open('all_English_Names.json', 'w') as file:
    file.write(json.dumps(thedict, indent=2))

```

#### The JavaScript
*evaluateInput()* is the function that is called when the user press 'Enter' or click
on the search button. This function checks if another function called "*getRadioInput()*"
evaluates to true or false. 
*getRadioInput()* checks which radio button (words and names) is checked. if word is checked
it returns true, else it returns false. 
*evaluateInput()* can now decide what JSON file should be added as argument
to the *callJson* function. If *getRadipInput()* is true it
will send *all_English_Words.json* and "Word" as arguments to the *callJson* function, else
it will send *all_English_Names.json* and "Name" as arguments. 

*callJson(theJsonFile, valueType)* got two parameters. *theJsonFile* should be a JSON file
and *valueType* should be a string containing "Name" or "Word".
*callJson* starts with storing the string input that the user have typed (input returned from
the *getInput()* function) inside a variable called "*anagram*". Afterwards it turns the anagram
into lowercase in case the user have typed with uppercase. All whitespace then gets removed
from the input followed by sorting the input alphabetically. As explained above about the
JSON files, the key value of the JSON files is a sorted word or name. Since we now have sorted
the user-input, we can search for words that match the input inside the JSON file.
A try catch block is also added to the code where anagrams is searched for in the JSON file
in case the key doesn't exist. If the key does not exist a message saying
"Name/Word anagrams for "your input" was not found" will be displayed on the screen.
If the key exist, the anagram matches will be displayed on the screen. 
