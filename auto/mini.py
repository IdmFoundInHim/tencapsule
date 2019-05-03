def indent_spaces(text, indent=2):
    return_list = []
    content_list = text.split('\n')
    for line in content_list:
        return_list.append = ' ' * indent + line
    return return_list.join()
