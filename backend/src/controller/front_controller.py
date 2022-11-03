from flask import render_template, request
from ..controller import controller


@controller.route('', methods=['GET'], defaults={'path': ''})
def home(path):
    script_root = request.script_root

    if script_root:
        script_root += "/"

    return render_template("dist/index.html", url_base=script_root + "front/dist")


@controller.route('UNIGRASAS/api/', methods=['GET'], defaults={'path': ''})
def home_api(path):
    script_root = request.script_root

    if script_root:
        script_root += "/"

    return render_template("dist/index.html", url_base=script_root + "front/dist")
