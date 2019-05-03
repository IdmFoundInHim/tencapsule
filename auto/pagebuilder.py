# ©2019 IdmFoundInHim
# Ten Capsule Page Builder
# GOAL: replace all CATCH Comments in base.html with content from input
#       (which is a specially formatted file) and put the result in a new
#       document
from mini import indent_spaces
"""
Definitions
-----------
* Catch: (often stylized CATCH) A place in the base document to be
    populated with document-specific content.

Notes
-----
* `return int-error` returns integer that is an error or success code

Acknowledgements
----------------
* <https://github.com/bambax/markitdown.medusis.com>
    This saved me hours of tedious work in content transfer
"""

r""" This is temporary
REGEX:
        <h4 class='lessonhead'>
          <!\-\-CATCH FIELD\(LessonHead[0-9]\)\-\->
        </h4>
        <h5 class='verse'>
          <!\-\-CATCH FIELD\(Verse[0-9]\)\-\->
        </h5>
        <p class='descrip'>
          <!\-\-CATCH FIELD\(Lesson[0-9]\)\-\->
        </p>
HTML:
        <h4 class='lessonhead'>
          <!--CATCH FIELD(LessonHead0)-->
        </h4>
        <h5 class='verse'>
          <!--CATCH FIELD(Verse0)-->
        </h5>
        <p class='descrip'>
          <!--CATCH FIELD(Lesson0)-->
        </p>
"""


class Property:
    """
    A location to be populated by inserted text

    Variables, Instance
    -------------------
    name:str
        Identifies the property
    content:str
        Stores data to be inserted
    content_format:str
        Records datatype (e.g. 'txt', 'md') for content

    Methods, Public
    ---------------
    fetch(content_format_restriction:str=None)
        return str
        Gets the defined content (only if it is in requested format)
    fill(content:str, content_format:str='txt')
        return int-error
        Defines the content for a Property instance
    """
    def fill(self, content, content_format='txt'):
        if content_format not in ['txt', 'md', 'html']:
            return 2  # Unsupported file type
        self.content, self.content_format = content, content_format
        return 0

    def fetch(self, content_format_restriction=None):
        if (content_format_restriction
                and content_format_restriction != self.content_format):
            return None
        else:
            return self.content



class Tag:
    """
    Object representation of an HTML tag fitted with population methods.

    Properties
    ----------
    name:str
        The type of tag
    selfclose:bool=False
        Is the tag self-closing?
    attributes:dict={}
        All attributes of the tag
    """
    def __init__(self, name, selfclose=False, attributes={}):
        self.name, self.selfclose = name, selfclose
        self.attributes = attributes

    def fetch_html(self):
        attributes_str = str
        # Remember to put a space at the beginning of attributes_str
        if self.selfclose:
            return f'<{self.name} {attributes_str} />'
        return [f'<{self.name}{attributes_str}>', f'</{self.name}']


class Element:
    """
    A tag + content + the closing tag

    Properties
    ----------
    tag:Tag
        The tag to wrap all the content
    content:list
        The list of str, Element, and Tag objects that populate the
        element
    """
    def __init__(self, tag, content_list):
        self.tag, self.content_list = tag, content_list

    def fetch_html(self, indentlevel=0):
        content_str = ''
        for item in self.content:
            html = item.fetch_html()
            if type(html) is list:
                html.join()
        taggedhtml = self.tag.fetch_html()
        f"{taggedhtml[0]}\n{indent_spaces(content_str)}\n{taggedhtml[1]}"


class Field(Property):
    """
    A location to be populated by inserted HTML
    Inherits from Property

    Variables, Instance
    -------------------
    content_cache:dict
        Stores content in various formats after conversion

    Methods, Public
    ---------------
    convert_html()
        return str
        Converts the defined content to HTML
    convert_md()
        return str
        Converts the defined content to Markdown
    convert_txt()
        return str
        Converts the defined content to plain text (no markup)
    fill(content:str, content_format:str='md')
        Same as `Property.fill`, but expects Markdown by default
    fetchas(content_type)
        return str
        Gets the content in the specified format, either from storage or
            conversion, and makes it the main format
    """
    @staticmethod
    def _markdowndefault_fill(fill_function):
        """ Modifies the inserted fill function to expect Markdown """
        def new_fill(self, content, content_format='md'):
            fill_function(self, content, content_format)
        return new_fill

    fill = _markdowndefault_fill(Property.fill)
