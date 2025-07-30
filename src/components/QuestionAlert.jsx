import React from "react";
import { FormattedMessage } from "react-intl";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const QuestionAlert = ({ open, onClose }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <FormattedMessage id="QuestionAlert.alert" />
          </DialogTitle>
          <DialogDescription>
            <FormattedMessage id="QuestionAlert.completeAllQuestions" />
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button>
              <FormattedMessage id="QuestionAlert.confirm" />
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default QuestionAlert;
