# ©2019 IdmFoundInHim
# Ten Capsule Page Builder
# GOAL: replace all CATCH Comments in base.html with content from input
#       (which is a specially formatted file) and put the result in a new
#       document
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
    set(content:str, content_format:str='txt')
        return int-error
        Defines the content for a Property instance
    """
    pass


class Tag:
    """
    Object representation of an HTML tag fitted with population methods.

    Properties
    ----------
    name:str
        The type of tag
    selfclose:bool
        Is the tag self-closing?
    href:str=None
        The href attribute of the tag
    class:str=None
        The class attribute of the tag
    id:str=None
        The id attribute of the tag
    """
    pass


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
    pass


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
    set(content:str, content_format:str='md')
        Same as `Property.set`, but expects Markdown by default
    fetchas(content_type)
        return str
        Gets the content in the specified format, either from storage or
            conversion, and makes it the main format
    """
    @staticmethod
    def _markdowndefault_set(set_function):
        """ Modifies the inserted set function to expect Markdown """
        def new_set(self, content, content_format='md'):
            set_function(self, content, content_format)
        return new_set

    set = _markdowndefault_set(set)
