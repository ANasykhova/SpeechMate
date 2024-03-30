import firebase_admin
from firebase_admin import credentials, firestore

from configs.env import CERTIFICATE_CONTENT
import os



def init_firebase():
    
    cred = credentials.Certificate(CERTIFICATE_CONTENT)
    firebase_admin.initialize_app(cred)


def get_firestore():
    return firestore.client()
