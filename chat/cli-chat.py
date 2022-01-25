# -*- coding: utf-8 -*-


from get_response import get_response

bot_name = "Assistant"
print("Un assistant virtuel est là pour répondre à toutes vos questions au sujet du Coronavirus. Ecrivez 'stop' pour quitter la discussion.")

while True:
    sentence = input("Vous: ")
    if sentence == 'stop':
        break
    print(bot_name + ': ' + get_response(sentence))